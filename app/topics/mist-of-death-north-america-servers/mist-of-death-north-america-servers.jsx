import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-north-america-servers');
}

export default function MistOfDeathNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-north-america-servers" />;
}
