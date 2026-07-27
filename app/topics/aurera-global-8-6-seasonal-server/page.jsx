import AureraGlobal86SeasonalServerKeywordPage, { generateMetadata } from './aurera-global-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal86SeasonalServerKeywordPage />;
}
