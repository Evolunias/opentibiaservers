import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-uk-servers');
}

export default function OriginaltibiaUkServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-uk-servers" />;
}
