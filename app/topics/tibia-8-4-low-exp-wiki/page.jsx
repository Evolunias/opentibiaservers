import Tibia84LowExpWikiKeywordPage, { generateMetadata } from './tibia-8-4-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84LowExpWikiKeywordPage />;
}
