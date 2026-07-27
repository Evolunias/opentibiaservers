import OfficialNostaltherTibiaKeywordPage, { generateMetadata } from './official-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherTibiaKeywordPage />;
}
