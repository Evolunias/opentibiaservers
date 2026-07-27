import AureraGlobal15SeasonalServerKeywordPage, { generateMetadata } from './aurera-global-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal15SeasonalServerKeywordPage />;
}
