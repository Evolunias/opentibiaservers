import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-non-pvp-server');
}

export default function Sabrehaven11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-non-pvp-server" />;
}
