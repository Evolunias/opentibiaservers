import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-uk-servers');
}

export default function TibiantisUkServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-uk-servers" />;
}
