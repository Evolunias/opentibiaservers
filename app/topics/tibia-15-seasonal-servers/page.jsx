import Tibia15SeasonalServersKeywordPage, { generateMetadata } from './tibia-15-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalServersKeywordPage />;
}
