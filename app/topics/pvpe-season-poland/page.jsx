import PvpeSeasonPolandKeywordPage, { generateMetadata } from './pvpe-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeSeasonPolandKeywordPage />;
}
