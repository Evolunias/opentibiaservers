import HighrateTibiascapeOtsKeywordPage, { generateMetadata } from './highrate-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeOtsKeywordPage />;
}
