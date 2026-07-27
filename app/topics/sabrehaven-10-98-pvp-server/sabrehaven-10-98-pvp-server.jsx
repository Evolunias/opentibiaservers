import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-pvp-server');
}

export default function Sabrehaven1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-pvp-server" />;
}
