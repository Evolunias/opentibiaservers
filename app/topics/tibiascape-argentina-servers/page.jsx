import TibiascapeArgentinaServersKeywordPage, { generateMetadata } from './tibiascape-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeArgentinaServersKeywordPage />;
}
