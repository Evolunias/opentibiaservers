import RubinotOldSchoolServerUkKeywordPage, { generateMetadata } from './rubinot-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotOldSchoolServerUkKeywordPage />;
}
