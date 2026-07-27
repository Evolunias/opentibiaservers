import OfficialNostaltherOpenTibiaKeywordPage, { generateMetadata } from './official-nostalther-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherOpenTibiaKeywordPage />;
}
