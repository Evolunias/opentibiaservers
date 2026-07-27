import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-client');
}

export default function LowrateMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-client" />;
}
