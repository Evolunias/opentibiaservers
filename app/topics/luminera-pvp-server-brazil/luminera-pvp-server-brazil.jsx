import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-brazil');
}

export default function LumineraPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-brazil" />;
}
