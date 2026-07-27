import OfficialAlasteraOpenTibiaKeywordPage, { generateMetadata } from './official-alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraOpenTibiaKeywordPage />;
}
