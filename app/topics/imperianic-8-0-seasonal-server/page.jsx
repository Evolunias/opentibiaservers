import Imperianic80SeasonalServerKeywordPage, { generateMetadata } from './imperianic-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic80SeasonalServerKeywordPage />;
}
