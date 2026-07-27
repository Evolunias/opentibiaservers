import ActiveTibiaretroRulesKeywordPage, { generateMetadata } from './active-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroRulesKeywordPage />;
}
