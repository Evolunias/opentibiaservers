import TopTibiaretroRulesKeywordPage, { generateMetadata } from './top-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroRulesKeywordPage />;
}
