import LowrateThaisotLoginKeywordPage, { generateMetadata } from './lowrate-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotLoginKeywordPage />;
}
