import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-usa-server');
}

export default function RealeraUsaServerKeywordPage() {
  return <StaticKeywordPage slug="realera-usa-server" />;
}
