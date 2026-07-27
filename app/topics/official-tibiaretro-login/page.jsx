import OfficialTibiaretroLoginKeywordPage, { generateMetadata } from './official-tibiaretro-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroLoginKeywordPage />;
}
