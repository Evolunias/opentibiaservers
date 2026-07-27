import Tibia13NoResetWikiKeywordPage, { generateMetadata } from './tibia-13-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetWikiKeywordPage />;
}
