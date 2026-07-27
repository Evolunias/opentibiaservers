import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-uk-servers');
}

export default function OlderaUkServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-uk-servers" />;
}
