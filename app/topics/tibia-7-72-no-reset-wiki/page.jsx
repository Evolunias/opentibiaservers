import Tibia772NoResetWikiKeywordPage, { generateMetadata } from './tibia-7-72-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772NoResetWikiKeywordPage />;
}
