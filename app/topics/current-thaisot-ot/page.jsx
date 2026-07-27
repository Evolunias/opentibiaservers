import CurrentThaisotOtKeywordPage, { generateMetadata } from './current-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotOtKeywordPage />;
}
