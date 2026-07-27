import Tibia772LowExpWikiKeywordPage, { generateMetadata } from './tibia-7-72-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772LowExpWikiKeywordPage />;
}
