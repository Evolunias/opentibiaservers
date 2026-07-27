import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-brazil');
}

export default function TibiantisPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-brazil" />;
}
