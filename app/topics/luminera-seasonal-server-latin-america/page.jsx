import LumineraSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './luminera-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraSeasonalServerLatinAmericaKeywordPage />;
}
