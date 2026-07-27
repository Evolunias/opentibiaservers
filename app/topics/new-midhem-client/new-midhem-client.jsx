import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-client');
}

export default function NewMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-client" />;
}
