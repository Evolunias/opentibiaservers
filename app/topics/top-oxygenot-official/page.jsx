import TopOxygenotOfficialKeywordPage, { generateMetadata } from './top-oxygenot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotOfficialKeywordPage />;
}
