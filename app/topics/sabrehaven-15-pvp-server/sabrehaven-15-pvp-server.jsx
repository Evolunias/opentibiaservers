import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-pvp-server');
}

export default function Sabrehaven15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-pvp-server" />;
}
