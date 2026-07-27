import OfficialNostaltherKeywordPage, { generateMetadata } from './official-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherKeywordPage />;
}
