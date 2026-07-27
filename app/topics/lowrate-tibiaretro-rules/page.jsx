import LowrateTibiaretroRulesKeywordPage, { generateMetadata } from './lowrate-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroRulesKeywordPage />;
}
