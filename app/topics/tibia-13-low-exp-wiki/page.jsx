import Tibia13LowExpWikiKeywordPage, { generateMetadata } from './tibia-13-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpWikiKeywordPage />;
}
