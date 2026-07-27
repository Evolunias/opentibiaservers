import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-poland-servers');
}

export default function RealestaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-poland-servers" />;
}
