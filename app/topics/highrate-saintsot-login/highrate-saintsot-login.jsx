import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-login');
}

export default function HighrateSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-login" />;
}
