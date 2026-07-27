import CurrentEvoleraOtKeywordPage, { generateMetadata } from './current-evolera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraOtKeywordPage />;
}
