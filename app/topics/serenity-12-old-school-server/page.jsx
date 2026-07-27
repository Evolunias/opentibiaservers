import Serenity12OldSchoolServerKeywordPage, { generateMetadata } from './serenity-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12OldSchoolServerKeywordPage />;
}
