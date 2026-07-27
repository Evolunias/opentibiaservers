import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-non-pvp-server');
}

export default function Sabrehaven86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-non-pvp-server" />;
}
