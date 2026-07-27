import Tibia12SeasonalServerKeywordPage, { generateMetadata } from './tibia-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalServerKeywordPage />;
}
