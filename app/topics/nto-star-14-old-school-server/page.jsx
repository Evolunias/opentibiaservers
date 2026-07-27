import NtoStar14OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14OldSchoolServerKeywordPage />;
}
