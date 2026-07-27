import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-pvp-server');
}

export default function Sabrehaven76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-pvp-server" />;
}
