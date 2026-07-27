import TibiascapePolandServersKeywordPage, { generateMetadata } from './tibiascape-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapePolandServersKeywordPage />;
}
