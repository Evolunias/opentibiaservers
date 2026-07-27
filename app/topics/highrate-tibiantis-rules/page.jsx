import HighrateTibiantisRulesKeywordPage, { generateMetadata } from './highrate-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisRulesKeywordPage />;
}
