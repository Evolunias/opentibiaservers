import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-non-pvp-server');
}

export default function Tibijka100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-non-pvp-server" />;
}
