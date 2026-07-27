import OfficialTibianusOpenTibiaKeywordPage, { generateMetadata } from './official-tibianus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusOpenTibiaKeywordPage />;
}
