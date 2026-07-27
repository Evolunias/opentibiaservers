import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-non-pvp-server');
}

export default function Sabrehaven14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-non-pvp-server" />;
}
