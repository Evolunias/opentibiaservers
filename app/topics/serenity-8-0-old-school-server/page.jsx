import Serenity80OldSchoolServerKeywordPage, { generateMetadata } from './serenity-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80OldSchoolServerKeywordPage />;
}
