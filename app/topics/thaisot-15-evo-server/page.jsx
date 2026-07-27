import Thaisot15EvoServerKeywordPage, { generateMetadata } from './thaisot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15EvoServerKeywordPage />;
}
