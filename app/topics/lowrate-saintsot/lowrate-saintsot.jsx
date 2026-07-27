import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot');
}

export default function LowrateSaintsotKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot" />;
}
