import AureraGlobal80SeasonalServerKeywordPage, { generateMetadata } from './aurera-global-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal80SeasonalServerKeywordPage />;
}
