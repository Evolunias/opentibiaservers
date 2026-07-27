import TibiascapeChileServersKeywordPage, { generateMetadata } from './tibiascape-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeChileServersKeywordPage />;
}
