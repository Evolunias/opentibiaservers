import OfficialRubinotRegisterKeywordPage, { generateMetadata } from './official-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotRegisterKeywordPage />;
}
