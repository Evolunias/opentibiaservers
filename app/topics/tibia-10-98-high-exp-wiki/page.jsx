import Tibia1098HighExpWikiKeywordPage, { generateMetadata } from './tibia-10-98-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098HighExpWikiKeywordPage />;
}
