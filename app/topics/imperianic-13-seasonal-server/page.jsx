import Imperianic13SeasonalServerKeywordPage, { generateMetadata } from './imperianic-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic13SeasonalServerKeywordPage />;
}
