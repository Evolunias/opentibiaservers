import CustomOxygenotForumKeywordPage, { generateMetadata } from './custom-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotForumKeywordPage />;
}
