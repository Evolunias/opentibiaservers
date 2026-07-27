import Tibia86NoResetWikiKeywordPage, { generateMetadata } from './tibia-8-6-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NoResetWikiKeywordPage />;
}
