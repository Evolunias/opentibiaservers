import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-mist-of-death-server');
}

export default function PvpeMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-mist-of-death-server" />;
}
