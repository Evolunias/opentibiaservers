import PvpeSeasonCanadaKeywordPage, { generateMetadata } from './pvpe-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeSeasonCanadaKeywordPage />;
}
