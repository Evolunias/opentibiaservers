import NewSeasonNoxiousotClientKeywordPage, { generateMetadata } from './new-season-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNoxiousotClientKeywordPage />;
}
