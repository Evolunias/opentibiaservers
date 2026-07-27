import ActiveOxygenotOfficialKeywordPage, { generateMetadata } from './active-oxygenot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotOfficialKeywordPage />;
}
