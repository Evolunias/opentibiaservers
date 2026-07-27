import EvoServerKeywordPage, { generateMetadata } from './evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerKeywordPage />;
}
