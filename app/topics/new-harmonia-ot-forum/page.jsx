import NewHarmoniaOtForumKeywordPage, { generateMetadata } from './new-harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewHarmoniaOtForumKeywordPage />;
}
