import NtoStar96OldSchoolServerKeywordPage, { generateMetadata } from './nto-star-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar96OldSchoolServerKeywordPage />;
}
