import OfficialCanobTibiaKeywordPage, { generateMetadata } from './official-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobTibiaKeywordPage />;
}
