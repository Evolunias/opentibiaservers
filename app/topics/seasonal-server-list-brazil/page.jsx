import SeasonalServerListBrazilKeywordPage, { generateMetadata } from './seasonal-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServerListBrazilKeywordPage />;
}
