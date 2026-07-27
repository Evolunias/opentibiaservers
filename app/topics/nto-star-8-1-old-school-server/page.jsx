import NtoStar81OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar81OldSchoolServerKeywordPage />;
}
