import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-sweden-servers');
}

export default function MistOfDeathSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-sweden-servers" />;
}
