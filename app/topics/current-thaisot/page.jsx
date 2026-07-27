import CurrentThaisotKeywordPage, { generateMetadata } from './current-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotKeywordPage />;
}
