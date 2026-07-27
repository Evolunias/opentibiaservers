import Classicus14SeasonalServerKeywordPage, { generateMetadata } from './classicus-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14SeasonalServerKeywordPage />;
}
