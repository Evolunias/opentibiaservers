import Tibia11SeasonalClientKeywordPage, { generateMetadata } from './tibia-11-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalClientKeywordPage />;
}
