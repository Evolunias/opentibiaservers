import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot');
}

export default function OfficialThaisotKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot" />;
}
