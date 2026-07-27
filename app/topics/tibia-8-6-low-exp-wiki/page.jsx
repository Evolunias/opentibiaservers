import Tibia86LowExpWikiKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpWikiKeywordPage />;
}
