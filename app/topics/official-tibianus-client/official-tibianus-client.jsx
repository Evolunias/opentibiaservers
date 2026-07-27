import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-client');
}

export default function OfficialTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-client" />;
}
