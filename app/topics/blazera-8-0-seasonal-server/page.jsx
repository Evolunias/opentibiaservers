import Blazera80SeasonalServerKeywordPage, { generateMetadata } from './blazera-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera80SeasonalServerKeywordPage />;
}
