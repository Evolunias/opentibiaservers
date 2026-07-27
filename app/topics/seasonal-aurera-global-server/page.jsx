import SeasonalAureraGlobalServerKeywordPage, { generateMetadata } from './seasonal-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalAureraGlobalServerKeywordPage />;
}
