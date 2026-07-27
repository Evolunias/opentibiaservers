import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-non-pvp-server');
}

export default function Sabrehaven71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-non-pvp-server" />;
}
