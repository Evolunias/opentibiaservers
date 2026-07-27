import Tibia15SeasonalClientKeywordPage, { generateMetadata } from './tibia-15-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalClientKeywordPage />;
}
