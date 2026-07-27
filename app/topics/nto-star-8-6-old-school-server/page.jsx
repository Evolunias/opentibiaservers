import NtoStar86OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar86OldSchoolServerKeywordPage />;
}
