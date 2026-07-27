import Tibia14NoResetWikiKeywordPage, { generateMetadata } from './tibia-14-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NoResetWikiKeywordPage />;
}
