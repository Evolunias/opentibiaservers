import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-uk-server');
}

export default function TibijkaUkServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-uk-server" />;
}
