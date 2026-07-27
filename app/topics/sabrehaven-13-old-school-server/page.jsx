import Sabrehaven13OldSchoolServerKeywordPage, { generateMetadata } from './sabrehaven-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13OldSchoolServerKeywordPage />;
}
