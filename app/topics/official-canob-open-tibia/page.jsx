import OfficialCanobOpenTibiaKeywordPage, { generateMetadata } from './official-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobOpenTibiaKeywordPage />;
}
