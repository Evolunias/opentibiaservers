import Miracle80SeasonalServerKeywordPage, { generateMetadata } from './miracle-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle80SeasonalServerKeywordPage />;
}
