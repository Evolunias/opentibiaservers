import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-client');
}

export default function OfficialEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-client" />;
}
