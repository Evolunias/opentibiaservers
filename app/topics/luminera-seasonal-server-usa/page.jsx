import LumineraSeasonalServerUsaKeywordPage, { generateMetadata } from './luminera-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraSeasonalServerUsaKeywordPage />;
}
