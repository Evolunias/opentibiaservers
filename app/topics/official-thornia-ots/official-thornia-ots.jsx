import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-ots');
}

export default function OfficialThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-ots" />;
}
