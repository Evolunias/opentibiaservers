import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-pvp-server');
}

export default function Sabrehaven81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-pvp-server" />;
}
