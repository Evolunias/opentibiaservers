import CoxaotEvoServerBrazilKeywordPage, { generateMetadata } from './coxaot-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotEvoServerBrazilKeywordPage />;
}
