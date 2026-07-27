import CurrentEvoleraOfficialKeywordPage, { generateMetadata } from './current-evolera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraOfficialKeywordPage />;
}
