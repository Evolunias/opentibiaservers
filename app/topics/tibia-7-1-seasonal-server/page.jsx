import Tibia71SeasonalServerKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalServerKeywordPage />;
}
