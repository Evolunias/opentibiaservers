import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-official');
}

export default function CurrentThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-official" />;
}
