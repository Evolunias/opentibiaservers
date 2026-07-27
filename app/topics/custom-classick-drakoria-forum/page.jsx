import CustomClassickDrakoriaForumKeywordPage, { generateMetadata } from './custom-classick-drakoria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaForumKeywordPage />;
}
