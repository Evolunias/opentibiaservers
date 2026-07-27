import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-ots');
}

export default function OfficialDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-ots" />;
}
