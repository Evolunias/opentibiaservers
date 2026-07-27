import OfficialNostaltherClientKeywordPage, { generateMetadata } from './official-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherClientKeywordPage />;
}
