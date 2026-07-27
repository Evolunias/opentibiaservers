import TibijkaOldSchoolServerMexicoKeywordPage, { generateMetadata } from './tibijka-old-school-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaOldSchoolServerMexicoKeywordPage />;
}
