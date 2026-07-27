import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-non-pvp-server');
}

export default function Sabrehaven1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-non-pvp-server" />;
}
