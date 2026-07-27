import HighrateSaintsotRulesKeywordPage, { generateMetadata } from './highrate-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotRulesKeywordPage />;
}
