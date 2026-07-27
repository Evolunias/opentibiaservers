import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-mexico-server');
}

export default function MistOfDeathMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-mexico-server" />;
}
