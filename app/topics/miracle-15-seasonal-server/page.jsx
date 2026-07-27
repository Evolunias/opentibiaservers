import Miracle15SeasonalServerKeywordPage, { generateMetadata } from './miracle-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle15SeasonalServerKeywordPage />;
}
