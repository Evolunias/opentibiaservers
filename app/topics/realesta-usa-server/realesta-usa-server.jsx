import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-usa-server');
}

export default function RealestaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-usa-server" />;
}
