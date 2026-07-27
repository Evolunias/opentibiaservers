import NtoStar13OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13OldSchoolServerKeywordPage />;
}
