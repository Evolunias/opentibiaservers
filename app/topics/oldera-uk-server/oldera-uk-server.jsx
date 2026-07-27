import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-uk-server');
}

export default function OlderaUkServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-uk-server" />;
}
