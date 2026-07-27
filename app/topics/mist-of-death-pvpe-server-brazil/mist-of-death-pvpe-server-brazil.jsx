import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-brazil');
}

export default function MistOfDeathPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-brazil" />;
}
