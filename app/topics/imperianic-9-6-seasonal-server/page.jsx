import Imperianic96SeasonalServerKeywordPage, { generateMetadata } from './imperianic-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic96SeasonalServerKeywordPage />;
}
