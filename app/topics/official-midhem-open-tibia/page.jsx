import OfficialMidhemOpenTibiaKeywordPage, { generateMetadata } from './official-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemOpenTibiaKeywordPage />;
}
