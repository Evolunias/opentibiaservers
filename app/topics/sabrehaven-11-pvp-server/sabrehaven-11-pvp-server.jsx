import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-pvp-server');
}

export default function Sabrehaven11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-pvp-server" />;
}
