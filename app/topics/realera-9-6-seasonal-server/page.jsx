import Realera96SeasonalServerKeywordPage, { generateMetadata } from './realera-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera96SeasonalServerKeywordPage />;
}
