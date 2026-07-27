import Rubinot12OldSchoolServerKeywordPage, { generateMetadata } from './rubinot-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot12OldSchoolServerKeywordPage />;
}
