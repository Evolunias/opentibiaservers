import InfernalOtSimilarServersKeywordPage, { generateMetadata } from './infernal-ot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtSimilarServersKeywordPage />;
}
