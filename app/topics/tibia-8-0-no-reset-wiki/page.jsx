import Tibia80NoResetWikiKeywordPage, { generateMetadata } from './tibia-8-0-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NoResetWikiKeywordPage />;
}
