import OfficialImperianicOpenTibiaKeywordPage, { generateMetadata } from './official-imperianic-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicOpenTibiaKeywordPage />;
}
