import OfficialTibijkaOpenTibiaKeywordPage, { generateMetadata } from './official-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaOpenTibiaKeywordPage />;
}
