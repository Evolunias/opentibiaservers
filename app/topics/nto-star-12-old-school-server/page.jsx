import NtoStar12OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12OldSchoolServerKeywordPage />;
}
