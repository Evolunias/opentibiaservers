import NoxiousotSeasonKeywordPage, { generateMetadata } from './noxiousot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotSeasonKeywordPage />;
}
