import Realera15SeasonalServerKeywordPage, { generateMetadata } from './realera-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15SeasonalServerKeywordPage />;
}
