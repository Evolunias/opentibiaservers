import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-non-pvp-server');
}

export default function Sabrehaven96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-non-pvp-server" />;
}
