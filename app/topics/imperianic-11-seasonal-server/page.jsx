import Imperianic11SeasonalServerKeywordPage, { generateMetadata } from './imperianic-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic11SeasonalServerKeywordPage />;
}
