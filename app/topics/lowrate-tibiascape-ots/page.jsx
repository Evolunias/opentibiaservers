import LowrateTibiascapeOtsKeywordPage, { generateMetadata } from './lowrate-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeOtsKeywordPage />;
}
