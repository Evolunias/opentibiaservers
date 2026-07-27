import Tibia74ServerOldSchoolKeywordPage, { generateMetadata } from './tibia-7-4-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerOldSchoolKeywordPage />;
}
