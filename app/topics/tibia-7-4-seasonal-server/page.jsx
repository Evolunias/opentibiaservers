import Tibia74SeasonalServerKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalServerKeywordPage />;
}
