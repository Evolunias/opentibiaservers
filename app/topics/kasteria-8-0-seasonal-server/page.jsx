import Kasteria80SeasonalServerKeywordPage, { generateMetadata } from './kasteria-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80SeasonalServerKeywordPage />;
}
