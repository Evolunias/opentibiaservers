import EvoRealeraServerKeywordPage, { generateMetadata } from './evo-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRealeraServerKeywordPage />;
}
