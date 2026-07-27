import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-sweden');
}

export default function MistOfDeathPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-sweden" />;
}
