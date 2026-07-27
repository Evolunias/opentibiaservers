import FreshStartTibiascapeServerKeywordPage, { generateMetadata } from './fresh-start-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeServerKeywordPage />;
}
