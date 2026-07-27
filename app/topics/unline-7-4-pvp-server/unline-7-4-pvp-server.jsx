import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-pvp-server');
}

export default function Unline74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-pvp-server" />;
}
