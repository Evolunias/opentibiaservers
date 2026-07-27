import OlderaOldSchoolServerPolandKeywordPage, { generateMetadata } from './oldera-old-school-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaOldSchoolServerPolandKeywordPage />;
}
