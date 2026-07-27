import CurrentOxygenotOfficialKeywordPage, { generateMetadata } from './current-oxygenot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotOfficialKeywordPage />;
}
