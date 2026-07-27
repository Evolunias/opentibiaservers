import CurrentUnlineOfficialKeywordPage, { generateMetadata } from './current-unline-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineOfficialKeywordPage />;
}
