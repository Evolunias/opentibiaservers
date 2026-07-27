import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-login');
}

export default function LowrateSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-login" />;
}
