import DuraOnline11SeasonalServerKeywordPage, { generateMetadata } from './dura-online-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline11SeasonalServerKeywordPage />;
}
