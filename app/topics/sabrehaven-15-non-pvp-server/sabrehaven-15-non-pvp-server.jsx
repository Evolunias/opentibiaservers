import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-non-pvp-server');
}

export default function Sabrehaven15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-non-pvp-server" />;
}
