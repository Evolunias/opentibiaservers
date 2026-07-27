import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-uk-server');
}

export default function TibiantisUkServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-uk-server" />;
}
