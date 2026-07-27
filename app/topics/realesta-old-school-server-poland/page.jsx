import RealestaOldSchoolServerPolandKeywordPage, { generateMetadata } from './realesta-old-school-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaOldSchoolServerPolandKeywordPage />;
}
