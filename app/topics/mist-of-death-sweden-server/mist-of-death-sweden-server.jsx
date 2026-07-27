import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-sweden-server');
}

export default function MistOfDeathSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-sweden-server" />;
}
