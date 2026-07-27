import SeasonalServerListUsaKeywordPage, { generateMetadata } from './seasonal-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServerListUsaKeywordPage />;
}
