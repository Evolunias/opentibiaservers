import Serenity81OldSchoolServerKeywordPage, { generateMetadata } from './serenity-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81OldSchoolServerKeywordPage />;
}
