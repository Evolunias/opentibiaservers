import Tibia74SeasonalClientKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalClientKeywordPage />;
}
