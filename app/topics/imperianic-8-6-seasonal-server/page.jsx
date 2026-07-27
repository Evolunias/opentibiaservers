import Imperianic86SeasonalServerKeywordPage, { generateMetadata } from './imperianic-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic86SeasonalServerKeywordPage />;
}
