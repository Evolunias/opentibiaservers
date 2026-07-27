import OfficialUnlineOpenTibiaKeywordPage, { generateMetadata } from './official-unline-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineOpenTibiaKeywordPage />;
}
