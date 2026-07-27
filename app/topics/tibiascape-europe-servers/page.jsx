import TibiascapeEuropeServersKeywordPage, { generateMetadata } from './tibiascape-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeEuropeServersKeywordPage />;
}
