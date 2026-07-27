import Tibia1098SeasonalServerKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalServerKeywordPage />;
}
