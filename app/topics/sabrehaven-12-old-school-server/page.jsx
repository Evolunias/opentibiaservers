import Sabrehaven12OldSchoolServerKeywordPage, { generateMetadata } from './sabrehaven-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12OldSchoolServerKeywordPage />;
}
