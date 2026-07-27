import Tibia11HighExpWikiKeywordPage, { generateMetadata } from './tibia-11-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11HighExpWikiKeywordPage />;
}
