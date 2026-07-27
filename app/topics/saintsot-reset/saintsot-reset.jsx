import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-reset');
}

export default function SaintsotResetKeywordPage() {
  return <StaticKeywordPage slug="saintsot-reset" />;
}
