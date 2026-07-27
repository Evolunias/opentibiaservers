import FreshStartTibiameKeywordPage, { generateMetadata } from './fresh-start-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiameKeywordPage />;
}
