import Miracle13SeasonalServerKeywordPage, { generateMetadata } from './miracle-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13SeasonalServerKeywordPage />;
}
