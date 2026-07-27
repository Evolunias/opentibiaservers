import InfernalOt12SeasonalServerKeywordPage, { generateMetadata } from './infernal-ot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOt12SeasonalServerKeywordPage />;
}
