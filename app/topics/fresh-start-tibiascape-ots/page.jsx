import FreshStartTibiascapeOtsKeywordPage, { generateMetadata } from './fresh-start-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeOtsKeywordPage />;
}
