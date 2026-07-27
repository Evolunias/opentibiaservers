import NewOxygenotOfficialKeywordPage, { generateMetadata } from './new-oxygenot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotOfficialKeywordPage />;
}
