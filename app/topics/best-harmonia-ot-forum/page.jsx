import BestHarmoniaOtForumKeywordPage, { generateMetadata } from './best-harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestHarmoniaOtForumKeywordPage />;
}
