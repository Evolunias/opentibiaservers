import EvoInfernalOtServersKeywordPage, { generateMetadata } from './evo-infernal-ot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoInfernalOtServersKeywordPage />;
}
