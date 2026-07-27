import OfficialMistOfDeathTibiaKeywordPage, { generateMetadata } from './official-mist-of-death-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMistOfDeathTibiaKeywordPage />;
}
