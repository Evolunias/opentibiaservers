import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-north-america-server');
}

export default function MistOfDeathNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-north-america-server" />;
}
