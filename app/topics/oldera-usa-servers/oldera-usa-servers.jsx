import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-usa-servers');
}

export default function OlderaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-usa-servers" />;
}
