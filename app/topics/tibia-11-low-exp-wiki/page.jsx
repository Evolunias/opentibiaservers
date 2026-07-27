import Tibia11LowExpWikiKeywordPage, { generateMetadata } from './tibia-11-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpWikiKeywordPage />;
}
