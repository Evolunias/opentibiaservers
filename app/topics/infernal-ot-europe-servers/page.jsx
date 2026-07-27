import InfernalOtEuropeServersKeywordPage, { generateMetadata } from './infernal-ot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtEuropeServersKeywordPage />;
}
