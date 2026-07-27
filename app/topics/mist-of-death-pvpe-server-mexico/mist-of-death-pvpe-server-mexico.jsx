import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-mexico');
}

export default function MistOfDeathPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-mexico" />;
}
