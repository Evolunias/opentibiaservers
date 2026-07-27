import Thaisot80EvoServerKeywordPage, { generateMetadata } from './thaisot-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot80EvoServerKeywordPage />;
}
