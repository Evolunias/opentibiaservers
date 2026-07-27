import CurrentRubinotOfficialKeywordPage, { generateMetadata } from './current-rubinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotOfficialKeywordPage />;
}
