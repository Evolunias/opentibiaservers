import FreshStartSeasonUsaKeywordPage, { generateMetadata } from './fresh-start-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSeasonUsaKeywordPage />;
}
