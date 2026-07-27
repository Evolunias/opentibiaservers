import CurrentThaisotServerKeywordPage, { generateMetadata } from './current-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotServerKeywordPage />;
}
