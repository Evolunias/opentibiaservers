import Tibia96NoResetWikiKeywordPage, { generateMetadata } from './tibia-9-6-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NoResetWikiKeywordPage />;
}
