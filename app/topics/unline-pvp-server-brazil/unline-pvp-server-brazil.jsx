import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-brazil');
}

export default function UnlinePvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-brazil" />;
}
