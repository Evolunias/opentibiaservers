import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-uk-servers');
}

export default function TibianusUkServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-uk-servers" />;
}
