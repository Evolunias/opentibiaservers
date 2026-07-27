import SeasonalServerListMexicoKeywordPage, { generateMetadata } from './seasonal-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServerListMexicoKeywordPage />;
}
