import NtoStar15OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15OldSchoolServerKeywordPage />;
}
