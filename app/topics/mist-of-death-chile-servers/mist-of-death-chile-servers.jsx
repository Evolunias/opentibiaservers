import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-chile-servers');
}

export default function MistOfDeathChileServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-chile-servers" />;
}
