import OfficialNostaltherOtsKeywordPage, { generateMetadata } from './official-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherOtsKeywordPage />;
}
