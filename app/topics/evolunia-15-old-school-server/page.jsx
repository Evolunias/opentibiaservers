import Evolunia15OldSchoolServerKeywordPage, { generateMetadata } from './evolunia-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia15OldSchoolServerKeywordPage />;
}
