import Tibia15LowExpWikiKeywordPage, { generateMetadata } from './tibia-15-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15LowExpWikiKeywordPage />;
}
