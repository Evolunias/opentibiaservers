import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-open-pvp');
}

export default function EleraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="elera-open-pvp" />;
}
