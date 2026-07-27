import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-pvp-server');
}

export default function Sabrehaven12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-pvp-server" />;
}
