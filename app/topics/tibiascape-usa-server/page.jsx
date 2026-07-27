import TibiascapeUsaServerKeywordPage, { generateMetadata } from './tibiascape-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeUsaServerKeywordPage />;
}
