import SeasonalServerListArgentinaKeywordPage, { generateMetadata } from './seasonal-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServerListArgentinaKeywordPage />;
}
