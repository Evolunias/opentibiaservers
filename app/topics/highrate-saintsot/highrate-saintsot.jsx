import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot');
}

export default function HighrateSaintsotKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot" />;
}
