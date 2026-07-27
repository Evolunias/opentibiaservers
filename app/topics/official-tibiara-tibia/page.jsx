import OfficialTibiaraTibiaKeywordPage, { generateMetadata } from './official-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraTibiaKeywordPage />;
}
