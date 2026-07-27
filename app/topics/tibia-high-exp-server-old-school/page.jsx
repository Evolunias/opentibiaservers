import TibiaHighExpServerOldSchoolKeywordPage, { generateMetadata } from './tibia-high-exp-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerOldSchoolKeywordPage />;
}
