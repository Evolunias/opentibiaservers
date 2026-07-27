import LowrateThaisotKeywordPage, { generateMetadata } from './lowrate-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotKeywordPage />;
}
