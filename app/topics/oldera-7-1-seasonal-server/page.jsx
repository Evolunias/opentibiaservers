import Oldera71SeasonalServerKeywordPage, { generateMetadata } from './oldera-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera71SeasonalServerKeywordPage />;
}
