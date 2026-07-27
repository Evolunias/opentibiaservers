import Tibia12NoResetWikiKeywordPage, { generateMetadata } from './tibia-12-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetWikiKeywordPage />;
}
