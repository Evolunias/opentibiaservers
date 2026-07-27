import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-latin-america-server');
}

export default function MistOfDeathLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-latin-america-server" />;
}
