import ActiveThaisotKeywordPage, { generateMetadata } from './active-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotKeywordPage />;
}
