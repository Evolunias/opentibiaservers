import InfernalOt100SeasonalServerKeywordPage, { generateMetadata } from './infernal-ot-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOt100SeasonalServerKeywordPage />;
}
