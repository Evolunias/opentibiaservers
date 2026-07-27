import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-argentina-server');
}

export default function MistOfDeathArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-argentina-server" />;
}
