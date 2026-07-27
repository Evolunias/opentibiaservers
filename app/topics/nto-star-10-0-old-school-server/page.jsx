import NtoStar100OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar100OldSchoolServerKeywordPage />;
}
