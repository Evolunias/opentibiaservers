import InfernalOtCanadaServersKeywordPage, { generateMetadata } from './infernal-ot-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtCanadaServersKeywordPage />;
}
