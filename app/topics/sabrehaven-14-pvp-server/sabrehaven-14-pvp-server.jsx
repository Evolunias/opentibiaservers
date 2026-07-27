import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-pvp-server');
}

export default function Sabrehaven14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-pvp-server" />;
}
