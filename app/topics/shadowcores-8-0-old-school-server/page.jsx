import Shadowcores80OldSchoolServerKeywordPage, { generateMetadata } from './shadowcores-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores80OldSchoolServerKeywordPage />;
}
