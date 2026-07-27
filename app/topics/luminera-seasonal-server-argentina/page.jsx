import LumineraSeasonalServerArgentinaKeywordPage, { generateMetadata } from './luminera-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraSeasonalServerArgentinaKeywordPage />;
}
