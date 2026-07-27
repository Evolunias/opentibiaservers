import FreshStartTibiascapeOtKeywordPage, { generateMetadata } from './fresh-start-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeOtKeywordPage />;
}
