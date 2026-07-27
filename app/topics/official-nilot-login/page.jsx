import OfficialNilotLoginKeywordPage, { generateMetadata } from './official-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotLoginKeywordPage />;
}
