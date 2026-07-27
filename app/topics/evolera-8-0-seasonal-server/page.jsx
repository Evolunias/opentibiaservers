import Evolera80SeasonalServerKeywordPage, { generateMetadata } from './evolera-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera80SeasonalServerKeywordPage />;
}
