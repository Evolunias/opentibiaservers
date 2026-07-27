import SeasonalInfernalOtServerKeywordPage, { generateMetadata } from './seasonal-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalInfernalOtServerKeywordPage />;
}
