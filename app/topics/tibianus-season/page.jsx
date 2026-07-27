import TibianusSeasonKeywordPage, { generateMetadata } from './tibianus-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusSeasonKeywordPage />;
}
