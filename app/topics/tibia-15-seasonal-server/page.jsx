import Tibia15SeasonalServerKeywordPage, { generateMetadata } from './tibia-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalServerKeywordPage />;
}
