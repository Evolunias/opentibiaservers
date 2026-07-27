import TopHarmoniaOtForumKeywordPage, { generateMetadata } from './top-harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopHarmoniaOtForumKeywordPage />;
}
