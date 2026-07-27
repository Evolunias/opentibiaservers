import Rubinot14OldSchoolServerKeywordPage, { generateMetadata } from './rubinot-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot14OldSchoolServerKeywordPage />;
}
