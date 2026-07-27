import Rubinot11OldSchoolServerKeywordPage, { generateMetadata } from './rubinot-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11OldSchoolServerKeywordPage />;
}
