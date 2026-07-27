import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-non-pvp-server');
}

export default function Sabrehaven12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-non-pvp-server" />;
}
