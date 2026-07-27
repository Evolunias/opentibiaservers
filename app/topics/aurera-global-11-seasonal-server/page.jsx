import AureraGlobal11SeasonalServerKeywordPage, { generateMetadata } from './aurera-global-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal11SeasonalServerKeywordPage />;
}
