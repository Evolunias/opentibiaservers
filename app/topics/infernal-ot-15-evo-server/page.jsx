import InfernalOt15EvoServerKeywordPage, { generateMetadata } from './infernal-ot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOt15EvoServerKeywordPage />;
}
