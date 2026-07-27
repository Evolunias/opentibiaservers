import LowrateTibiantisRulesKeywordPage, { generateMetadata } from './lowrate-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisRulesKeywordPage />;
}
