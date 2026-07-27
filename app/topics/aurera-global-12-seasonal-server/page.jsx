import AureraGlobal12SeasonalServerKeywordPage, { generateMetadata } from './aurera-global-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal12SeasonalServerKeywordPage />;
}
