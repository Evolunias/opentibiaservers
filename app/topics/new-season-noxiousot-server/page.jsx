import NewSeasonNoxiousotServerKeywordPage, { generateMetadata } from './new-season-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNoxiousotServerKeywordPage />;
}
