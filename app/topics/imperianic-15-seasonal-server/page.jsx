import Imperianic15SeasonalServerKeywordPage, { generateMetadata } from './imperianic-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15SeasonalServerKeywordPage />;
}
