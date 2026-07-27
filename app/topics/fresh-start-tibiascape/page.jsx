import FreshStartTibiascapeKeywordPage, { generateMetadata } from './fresh-start-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeKeywordPage />;
}
