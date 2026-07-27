import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-non-pvp-server');
}

export default function Sabrehaven13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-non-pvp-server" />;
}
