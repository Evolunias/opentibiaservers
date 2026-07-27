import SeasonalClientUsaKeywordPage, { generateMetadata } from './seasonal-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientUsaKeywordPage />;
}
