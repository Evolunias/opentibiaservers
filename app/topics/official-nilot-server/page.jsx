import OfficialNilotServerKeywordPage, { generateMetadata } from './official-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotServerKeywordPage />;
}
