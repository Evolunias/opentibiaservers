import HighrateTibiaretroRulesKeywordPage, { generateMetadata } from './highrate-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroRulesKeywordPage />;
}
