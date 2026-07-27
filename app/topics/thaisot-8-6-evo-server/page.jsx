import Thaisot86EvoServerKeywordPage, { generateMetadata } from './thaisot-8-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot86EvoServerKeywordPage />;
}
