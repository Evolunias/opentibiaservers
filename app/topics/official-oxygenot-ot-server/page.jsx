import OfficialOxygenotOtServerKeywordPage, { generateMetadata } from './official-oxygenot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotOtServerKeywordPage />;
}
