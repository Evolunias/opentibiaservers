import TopThaisotKeywordPage, { generateMetadata } from './top-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotKeywordPage />;
}
