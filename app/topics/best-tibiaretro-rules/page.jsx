import BestTibiaretroRulesKeywordPage, { generateMetadata } from './best-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroRulesKeywordPage />;
}
