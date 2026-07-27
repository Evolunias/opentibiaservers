import InfernalOt13SeasonalServerKeywordPage, { generateMetadata } from './infernal-ot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOt13SeasonalServerKeywordPage />;
}
