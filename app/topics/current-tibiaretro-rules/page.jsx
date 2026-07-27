import CurrentTibiaretroRulesKeywordPage, { generateMetadata } from './current-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroRulesKeywordPage />;
}
