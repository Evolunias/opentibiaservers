import OfficialThaisotLoginKeywordPage, { generateMetadata } from './official-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotLoginKeywordPage />;
}
