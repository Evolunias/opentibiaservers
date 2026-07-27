import AureraGlobalSeasonalServerBrazilKeywordPage, { generateMetadata } from './aurera-global-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSeasonalServerBrazilKeywordPage />;
}
