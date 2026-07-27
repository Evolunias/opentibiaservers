import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-client');
}

export default function OfficialMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-client" />;
}
