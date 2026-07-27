import OfficialTibiascapeTibiaKeywordPage, { generateMetadata } from './official-tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeTibiaKeywordPage />;
}
