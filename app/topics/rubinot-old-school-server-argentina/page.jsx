import RubinotOldSchoolServerArgentinaKeywordPage, { generateMetadata } from './rubinot-old-school-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotOldSchoolServerArgentinaKeywordPage />;
}
