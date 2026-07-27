import RealestaOldSchoolServerMexicoKeywordPage, { generateMetadata } from './realesta-old-school-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaOldSchoolServerMexicoKeywordPage />;
}
