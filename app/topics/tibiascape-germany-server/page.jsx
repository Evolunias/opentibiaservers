import TibiascapeGermanyServerKeywordPage, { generateMetadata } from './tibiascape-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeGermanyServerKeywordPage />;
}
