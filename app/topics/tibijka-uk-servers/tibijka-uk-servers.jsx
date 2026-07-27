import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-uk-servers');
}

export default function TibijkaUkServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-uk-servers" />;
}
