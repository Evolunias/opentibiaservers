import TibiascapeClientKeywordPage, { generateMetadata } from './tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeClientKeywordPage />;
}
