import Classicus15EvoServerKeywordPage, { generateMetadata } from './classicus-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15EvoServerKeywordPage />;
}
