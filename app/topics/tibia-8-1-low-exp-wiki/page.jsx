import Tibia81LowExpWikiKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpWikiKeywordPage />;
}
