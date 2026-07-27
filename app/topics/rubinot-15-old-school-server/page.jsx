import Rubinot15OldSchoolServerKeywordPage, { generateMetadata } from './rubinot-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15OldSchoolServerKeywordPage />;
}
