import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-54-non-pvp-server');
}

export default function Shadowcores854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-54-non-pvp-server" />;
}
