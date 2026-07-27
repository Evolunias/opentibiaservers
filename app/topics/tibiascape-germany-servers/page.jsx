import TibiascapeGermanyServersKeywordPage, { generateMetadata } from './tibiascape-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeGermanyServersKeywordPage />;
}
