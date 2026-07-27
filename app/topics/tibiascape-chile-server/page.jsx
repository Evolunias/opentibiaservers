import TibiascapeChileServerKeywordPage, { generateMetadata } from './tibiascape-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeChileServerKeywordPage />;
}
