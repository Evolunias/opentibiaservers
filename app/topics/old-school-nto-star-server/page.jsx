import OldSchoolNtoStarServerKeywordPage, { generateMetadata } from './old-school-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarServerKeywordPage />;
}
