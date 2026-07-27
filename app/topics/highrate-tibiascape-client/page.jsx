import HighrateTibiascapeClientKeywordPage, { generateMetadata } from './highrate-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeClientKeywordPage />;
}
