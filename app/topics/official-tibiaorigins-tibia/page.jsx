import OfficialTibiaoriginsTibiaKeywordPage, { generateMetadata } from './official-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsTibiaKeywordPage />;
}
