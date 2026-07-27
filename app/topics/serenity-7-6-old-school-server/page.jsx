import Serenity76OldSchoolServerKeywordPage, { generateMetadata } from './serenity-7-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity76OldSchoolServerKeywordPage />;
}
