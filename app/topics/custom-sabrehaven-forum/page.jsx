import CustomSabrehavenForumKeywordPage, { generateMetadata } from './custom-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenForumKeywordPage />;
}
