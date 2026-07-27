import Tibia1098LowExpWikiKeywordPage, { generateMetadata } from './tibia-10-98-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098LowExpWikiKeywordPage />;
}
