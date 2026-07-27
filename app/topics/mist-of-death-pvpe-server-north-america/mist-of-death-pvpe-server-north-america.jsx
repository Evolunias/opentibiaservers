import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-north-america');
}

export default function MistOfDeathPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-north-america" />;
}
