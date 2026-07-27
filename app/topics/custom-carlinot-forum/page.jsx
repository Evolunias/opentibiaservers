import CustomCarlinotForumKeywordPage, { generateMetadata } from './custom-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotForumKeywordPage />;
}
