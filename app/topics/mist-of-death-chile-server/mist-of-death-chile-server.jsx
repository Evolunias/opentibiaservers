import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-chile-server');
}

export default function MistOfDeathChileServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-chile-server" />;
}
