import NewThaisotKeywordPage, { generateMetadata } from './new-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotKeywordPage />;
}
