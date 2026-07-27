import Thaisot96EvoServerKeywordPage, { generateMetadata } from './thaisot-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot96EvoServerKeywordPage />;
}
