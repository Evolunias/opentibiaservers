import InfernalOt11SeasonalServerKeywordPage, { generateMetadata } from './infernal-ot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOt11SeasonalServerKeywordPage />;
}
