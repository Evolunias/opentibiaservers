import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-argentina-servers');
}

export default function MistOfDeathArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-argentina-servers" />;
}
