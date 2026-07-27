import Tibia15NoResetWikiKeywordPage, { generateMetadata } from './tibia-15-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NoResetWikiKeywordPage />;
}
