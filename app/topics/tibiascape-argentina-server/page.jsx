import TibiascapeArgentinaServerKeywordPage, { generateMetadata } from './tibiascape-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeArgentinaServerKeywordPage />;
}
