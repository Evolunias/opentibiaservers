import Tibia11SeasonalServerKeywordPage, { generateMetadata } from './tibia-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalServerKeywordPage />;
}
