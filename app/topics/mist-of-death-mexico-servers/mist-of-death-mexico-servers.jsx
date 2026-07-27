import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-mexico-servers');
}

export default function MistOfDeathMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-mexico-servers" />;
}
