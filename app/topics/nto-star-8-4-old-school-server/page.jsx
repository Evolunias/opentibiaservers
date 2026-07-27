import NtoStar84OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-8-4-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar84OldSchoolServerKeywordPage />;
}
