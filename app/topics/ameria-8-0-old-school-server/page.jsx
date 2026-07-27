import Ameria80OldSchoolServerKeywordPage, { generateMetadata } from './ameria-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria80OldSchoolServerKeywordPage />;
}
