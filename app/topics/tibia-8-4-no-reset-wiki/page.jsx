import Tibia84NoResetWikiKeywordPage, { generateMetadata } from './tibia-8-4-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NoResetWikiKeywordPage />;
}
