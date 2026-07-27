import Serenity86OldSchoolServerKeywordPage, { generateMetadata } from './serenity-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86OldSchoolServerKeywordPage />;
}
