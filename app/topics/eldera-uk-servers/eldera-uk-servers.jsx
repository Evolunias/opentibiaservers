import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-uk-servers');
}

export default function ElderaUkServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-uk-servers" />;
}
