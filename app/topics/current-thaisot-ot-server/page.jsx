import CurrentThaisotOtServerKeywordPage, { generateMetadata } from './current-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotOtServerKeywordPage />;
}
