import OfficialTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './official-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeOpenTibiaKeywordPage />;
}
