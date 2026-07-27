import Tibia74FreshStartSeasonKeywordPage, { generateMetadata } from './tibia-7-4-fresh-start-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74FreshStartSeasonKeywordPage />;
}
