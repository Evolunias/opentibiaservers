import OfficialUnlineTibiaKeywordPage, { generateMetadata } from './official-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineTibiaKeywordPage />;
}
