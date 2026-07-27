import TopTibiascapeClientKeywordPage, { generateMetadata } from './top-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeClientKeywordPage />;
}
