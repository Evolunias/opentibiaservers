import OfficialNilotClientKeywordPage, { generateMetadata } from './official-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotClientKeywordPage />;
}
