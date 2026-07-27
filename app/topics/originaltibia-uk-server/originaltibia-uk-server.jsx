import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-uk-server');
}

export default function OriginaltibiaUkServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-uk-server" />;
}
