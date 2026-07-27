import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-brazil');
}

export default function SabrehavenPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-brazil" />;
}
