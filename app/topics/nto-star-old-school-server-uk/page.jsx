import NtoStarOldSchoolServerUkKeywordPage, { generateMetadata } from './nto-star-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarOldSchoolServerUkKeywordPage />;
}
