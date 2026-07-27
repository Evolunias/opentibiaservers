import Tibia76LowExpWikiKeywordPage, { generateMetadata } from './tibia-7-6-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76LowExpWikiKeywordPage />;
}
