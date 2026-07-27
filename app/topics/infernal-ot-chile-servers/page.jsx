import InfernalOtChileServersKeywordPage, { generateMetadata } from './infernal-ot-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtChileServersKeywordPage />;
}
