import FreshStartThaisotKeywordPage, { generateMetadata } from './fresh-start-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotKeywordPage />;
}
