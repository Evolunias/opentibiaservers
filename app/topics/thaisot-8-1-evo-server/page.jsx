import Thaisot81EvoServerKeywordPage, { generateMetadata } from './thaisot-8-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81EvoServerKeywordPage />;
}
