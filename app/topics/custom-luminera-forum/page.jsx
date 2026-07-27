import CustomLumineraForumKeywordPage, { generateMetadata } from './custom-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraForumKeywordPage />;
}
