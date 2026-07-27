import InfernalOtBrazilServersKeywordPage, { generateMetadata } from './infernal-ot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtBrazilServersKeywordPage />;
}
