import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-non-pvp-server');
}

export default function Sabrehaven74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-non-pvp-server" />;
}
