import OfficialLumineraOpenTibiaKeywordPage, { generateMetadata } from './official-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraOpenTibiaKeywordPage />;
}
