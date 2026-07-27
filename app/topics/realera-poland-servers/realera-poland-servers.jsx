import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-poland-servers');
}

export default function RealeraPolandServersKeywordPage() {
  return <StaticKeywordPage slug="realera-poland-servers" />;
}
