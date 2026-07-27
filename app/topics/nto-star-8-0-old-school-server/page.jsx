import NtoStar80OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar80OldSchoolServerKeywordPage />;
}
