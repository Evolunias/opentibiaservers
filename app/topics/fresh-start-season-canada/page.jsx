import FreshStartSeasonCanadaKeywordPage, { generateMetadata } from './fresh-start-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSeasonCanadaKeywordPage />;
}
