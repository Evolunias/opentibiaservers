import AureraGlobal96SeasonalServerKeywordPage, { generateMetadata } from './aurera-global-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal96SeasonalServerKeywordPage />;
}
