import CurrentThaisotLoginKeywordPage, { generateMetadata } from './current-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotLoginKeywordPage />;
}
