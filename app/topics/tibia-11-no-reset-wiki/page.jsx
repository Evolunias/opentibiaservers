import Tibia11NoResetWikiKeywordPage, { generateMetadata } from './tibia-11-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NoResetWikiKeywordPage />;
}
