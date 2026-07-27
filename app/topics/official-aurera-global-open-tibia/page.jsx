import OfficialAureraGlobalOpenTibiaKeywordPage, { generateMetadata } from './official-aurera-global-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAureraGlobalOpenTibiaKeywordPage />;
}
