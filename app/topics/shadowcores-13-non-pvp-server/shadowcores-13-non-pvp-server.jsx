import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-non-pvp-server');
}

export default function Shadowcores13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-non-pvp-server" />;
}
