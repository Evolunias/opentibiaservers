import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-client');
}

export default function OfficialUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="official-unline-client" />;
}
