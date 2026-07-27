import CurrentTibiascapeOtsKeywordPage, { generateMetadata } from './current-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeOtsKeywordPage />;
}
