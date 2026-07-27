import Tibia96LowExpWikiKeywordPage, { generateMetadata } from './tibia-9-6-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96LowExpWikiKeywordPage />;
}
