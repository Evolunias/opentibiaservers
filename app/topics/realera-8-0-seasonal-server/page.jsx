import Realera80SeasonalServerKeywordPage, { generateMetadata } from './realera-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera80SeasonalServerKeywordPage />;
}
