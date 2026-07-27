import AureraGlobalSeasonalServerArgentinaKeywordPage, { generateMetadata } from './aurera-global-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSeasonalServerArgentinaKeywordPage />;
}
