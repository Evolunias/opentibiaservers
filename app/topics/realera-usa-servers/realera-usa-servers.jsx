import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-usa-servers');
}

export default function RealeraUsaServersKeywordPage() {
  return <StaticKeywordPage slug="realera-usa-servers" />;
}
