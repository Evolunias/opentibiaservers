import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot');
}

export default function SaintsotKeywordPage() {
  return <StaticKeywordPage slug="saintsot" />;
}
