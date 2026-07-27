import InfernalOt12EvoServerKeywordPage, { generateMetadata } from './infernal-ot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOt12EvoServerKeywordPage />;
}
