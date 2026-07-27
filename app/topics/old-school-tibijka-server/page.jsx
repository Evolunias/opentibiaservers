import OldSchoolTibijkaServerKeywordPage, { generateMetadata } from './old-school-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaServerKeywordPage />;
}
