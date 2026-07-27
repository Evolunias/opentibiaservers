import Serenity96OldSchoolServerKeywordPage, { generateMetadata } from './serenity-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96OldSchoolServerKeywordPage />;
}
