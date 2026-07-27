import Tibia96SeasonalServerKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalServerKeywordPage />;
}
