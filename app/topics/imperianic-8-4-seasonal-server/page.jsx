import Imperianic84SeasonalServerKeywordPage, { generateMetadata } from './imperianic-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic84SeasonalServerKeywordPage />;
}
