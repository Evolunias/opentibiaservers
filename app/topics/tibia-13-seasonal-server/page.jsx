import Tibia13SeasonalServerKeywordPage, { generateMetadata } from './tibia-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalServerKeywordPage />;
}
