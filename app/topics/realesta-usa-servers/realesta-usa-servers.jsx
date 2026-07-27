import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-usa-servers');
}

export default function RealestaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-usa-servers" />;
}
