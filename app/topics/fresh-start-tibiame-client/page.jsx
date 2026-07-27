import FreshStartTibiameClientKeywordPage, { generateMetadata } from './fresh-start-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiameClientKeywordPage />;
}
