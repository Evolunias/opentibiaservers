import CustomTibiantisForumKeywordPage, { generateMetadata } from './custom-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisForumKeywordPage />;
}
