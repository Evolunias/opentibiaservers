import OfficialTibiaretroRulesKeywordPage, { generateMetadata } from './official-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroRulesKeywordPage />;
}
