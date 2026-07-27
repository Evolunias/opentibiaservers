import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-pvp-server');
}

export default function Sabrehaven74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-pvp-server" />;
}
