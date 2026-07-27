import OfficialNilotPrivateServerKeywordPage, { generateMetadata } from './official-nilot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotPrivateServerKeywordPage />;
}
