import Tibia74ServerSeasonKeywordPage, { generateMetadata } from './tibia-7-4-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerSeasonKeywordPage />;
}
