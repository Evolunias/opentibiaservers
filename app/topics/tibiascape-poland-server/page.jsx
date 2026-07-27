import TibiascapePolandServerKeywordPage, { generateMetadata } from './tibiascape-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapePolandServerKeywordPage />;
}
