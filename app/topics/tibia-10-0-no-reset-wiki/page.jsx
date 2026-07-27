import Tibia100NoResetWikiKeywordPage, { generateMetadata } from './tibia-10-0-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NoResetWikiKeywordPage />;
}
