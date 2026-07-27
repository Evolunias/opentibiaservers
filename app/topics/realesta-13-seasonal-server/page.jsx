import Realesta13SeasonalServerKeywordPage, { generateMetadata } from './realesta-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta13SeasonalServerKeywordPage />;
}
