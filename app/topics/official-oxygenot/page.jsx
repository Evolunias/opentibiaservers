import OfficialOxygenotKeywordPage, { generateMetadata } from './official-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotKeywordPage />;
}
