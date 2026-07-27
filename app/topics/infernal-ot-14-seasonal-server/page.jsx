import InfernalOt14SeasonalServerKeywordPage, { generateMetadata } from './infernal-ot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOt14SeasonalServerKeywordPage />;
}
