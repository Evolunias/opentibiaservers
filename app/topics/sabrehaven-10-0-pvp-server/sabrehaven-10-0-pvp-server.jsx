import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-pvp-server');
}

export default function Sabrehaven100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-pvp-server" />;
}
