import LowrateSaintsotRulesKeywordPage, { generateMetadata } from './lowrate-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotRulesKeywordPage />;
}
