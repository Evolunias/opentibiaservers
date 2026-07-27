import Tibia74SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalOtServerKeywordPage />;
}
