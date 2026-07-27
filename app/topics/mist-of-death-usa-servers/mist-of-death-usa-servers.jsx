import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-usa-servers');
}

export default function MistOfDeathUsaServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-usa-servers" />;
}
