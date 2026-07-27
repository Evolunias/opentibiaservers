import TibiascapeStatusKeywordPage, { generateMetadata } from './tibiascape-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeStatusKeywordPage />;
}
