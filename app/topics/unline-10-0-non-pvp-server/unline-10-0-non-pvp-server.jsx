import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-non-pvp-server');
}

export default function Unline100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-non-pvp-server" />;
}
