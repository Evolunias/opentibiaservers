import Rubinot13OldSchoolServerKeywordPage, { generateMetadata } from './rubinot-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13OldSchoolServerKeywordPage />;
}
