import OfficialEvoleraOpenTibiaKeywordPage, { generateMetadata } from './official-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraOpenTibiaKeywordPage />;
}
