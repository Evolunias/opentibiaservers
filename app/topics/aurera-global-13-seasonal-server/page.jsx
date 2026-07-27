import AureraGlobal13SeasonalServerKeywordPage, { generateMetadata } from './aurera-global-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal13SeasonalServerKeywordPage />;
}
