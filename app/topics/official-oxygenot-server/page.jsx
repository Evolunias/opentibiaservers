import OfficialOxygenotServerKeywordPage, { generateMetadata } from './official-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotServerKeywordPage />;
}
