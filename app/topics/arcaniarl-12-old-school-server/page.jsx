import Arcaniarl12OldSchoolServerKeywordPage, { generateMetadata } from './arcaniarl-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl12OldSchoolServerKeywordPage />;
}
