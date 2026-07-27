import Miracle84SeasonalServerKeywordPage, { generateMetadata } from './miracle-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle84SeasonalServerKeywordPage />;
}
