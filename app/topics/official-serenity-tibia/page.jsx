import OfficialSerenityTibiaKeywordPage, { generateMetadata } from './official-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityTibiaKeywordPage />;
}
