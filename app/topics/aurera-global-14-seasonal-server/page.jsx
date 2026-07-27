import AureraGlobal14SeasonalServerKeywordPage, { generateMetadata } from './aurera-global-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal14SeasonalServerKeywordPage />;
}
