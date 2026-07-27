import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-canada-servers');
}

export default function MistOfDeathCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-canada-servers" />;
}
