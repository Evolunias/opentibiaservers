import HighrateHarmoniaOtForumKeywordPage, { generateMetadata } from './highrate-harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateHarmoniaOtForumKeywordPage />;
}
