import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-germany-server');
}

export default function MistOfDeathGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-germany-server" />;
}
