import RealestaOldSchoolServerEuropeKeywordPage, { generateMetadata } from './realesta-old-school-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaOldSchoolServerEuropeKeywordPage />;
}
