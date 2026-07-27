import AureraGlobal84SeasonalServerKeywordPage, { generateMetadata } from './aurera-global-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal84SeasonalServerKeywordPage />;
}
