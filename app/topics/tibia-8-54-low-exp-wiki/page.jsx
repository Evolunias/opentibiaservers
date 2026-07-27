import Tibia854LowExpWikiKeywordPage, { generateMetadata } from './tibia-8-54-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854LowExpWikiKeywordPage />;
}
