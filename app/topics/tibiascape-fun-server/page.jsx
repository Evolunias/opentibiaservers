import TibiascapeFunServerKeywordPage, { generateMetadata } from './tibiascape-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeFunServerKeywordPage />;
}
