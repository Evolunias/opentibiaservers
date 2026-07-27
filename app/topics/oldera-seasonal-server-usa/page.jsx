import OlderaSeasonalServerUsaKeywordPage, { generateMetadata } from './oldera-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaSeasonalServerUsaKeywordPage />;
}
