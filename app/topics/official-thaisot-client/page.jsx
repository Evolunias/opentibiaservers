import OfficialThaisotClientKeywordPage, { generateMetadata } from './official-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotClientKeywordPage />;
}
