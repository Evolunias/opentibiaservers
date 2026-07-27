import AureraGlobalSeasonalServerUsaKeywordPage, { generateMetadata } from './aurera-global-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSeasonalServerUsaKeywordPage />;
}
