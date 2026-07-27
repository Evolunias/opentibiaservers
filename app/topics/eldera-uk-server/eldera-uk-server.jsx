import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-uk-server');
}

export default function ElderaUkServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-uk-server" />;
}
