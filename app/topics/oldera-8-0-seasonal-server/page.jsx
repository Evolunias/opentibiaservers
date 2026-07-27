import Oldera80SeasonalServerKeywordPage, { generateMetadata } from './oldera-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80SeasonalServerKeywordPage />;
}
