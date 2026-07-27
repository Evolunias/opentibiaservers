import TibiascapeWarsKeywordPage, { generateMetadata } from './tibiascape-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeWarsKeywordPage />;
}
