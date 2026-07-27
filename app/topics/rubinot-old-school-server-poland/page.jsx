import RubinotOldSchoolServerPolandKeywordPage, { generateMetadata } from './rubinot-old-school-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotOldSchoolServerPolandKeywordPage />;
}
