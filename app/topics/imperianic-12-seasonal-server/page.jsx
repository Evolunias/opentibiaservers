import Imperianic12SeasonalServerKeywordPage, { generateMetadata } from './imperianic-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic12SeasonalServerKeywordPage />;
}
