import NewSeasonRubinotRegisterKeywordPage, { generateMetadata } from './new-season-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotRegisterKeywordPage />;
}
