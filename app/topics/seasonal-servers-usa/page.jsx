import SeasonalServersUsaKeywordPage, { generateMetadata } from './seasonal-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersUsaKeywordPage />;
}
