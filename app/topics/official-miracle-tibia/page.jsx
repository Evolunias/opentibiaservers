import OfficialMiracleTibiaKeywordPage, { generateMetadata } from './official-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleTibiaKeywordPage />;
}
