import CustomThaisotForumKeywordPage, { generateMetadata } from './custom-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotForumKeywordPage />;
}
