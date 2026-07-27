import Tibia74SeasonalServersKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalServersKeywordPage />;
}
