import Tibia74SeasonalStatusKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalStatusKeywordPage />;
}
