import CustomYurotsForumKeywordPage, { generateMetadata } from './custom-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsForumKeywordPage />;
}
