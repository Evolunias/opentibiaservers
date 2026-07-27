import SeasonalServerListPolandKeywordPage, { generateMetadata } from './seasonal-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServerListPolandKeywordPage />;
}
