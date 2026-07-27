import Arcaniarl11OldSchoolServerKeywordPage, { generateMetadata } from './arcaniarl-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl11OldSchoolServerKeywordPage />;
}
