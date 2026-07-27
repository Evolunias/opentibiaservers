import OfficialTibiaoriginsOpenTibiaKeywordPage, { generateMetadata } from './official-tibiaorigins-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsOpenTibiaKeywordPage />;
}
