import NtoStar11OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11OldSchoolServerKeywordPage />;
}
