import InfernalOtBrazilServerKeywordPage, { generateMetadata } from './infernal-ot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtBrazilServerKeywordPage />;
}
