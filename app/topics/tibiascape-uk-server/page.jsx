import TibiascapeUkServerKeywordPage, { generateMetadata } from './tibiascape-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeUkServerKeywordPage />;
}
