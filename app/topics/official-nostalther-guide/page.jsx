import OfficialNostaltherGuideKeywordPage, { generateMetadata } from './official-nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherGuideKeywordPage />;
}
