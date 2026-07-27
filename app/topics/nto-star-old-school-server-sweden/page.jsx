import NtoStarOldSchoolServerSwedenKeywordPage, { generateMetadata } from './nto-star-old-school-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarOldSchoolServerSwedenKeywordPage />;
}
