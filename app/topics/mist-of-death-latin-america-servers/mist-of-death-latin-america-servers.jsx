import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-latin-america-servers');
}

export default function MistOfDeathLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-latin-america-servers" />;
}
