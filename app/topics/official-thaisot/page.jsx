import OfficialThaisotKeywordPage, { generateMetadata } from './official-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotKeywordPage />;
}
