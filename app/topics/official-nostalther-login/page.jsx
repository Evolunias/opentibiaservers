import OfficialNostaltherLoginKeywordPage, { generateMetadata } from './official-nostalther-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherLoginKeywordPage />;
}
