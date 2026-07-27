import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-mexico-server');
}

export default function RuthlessChaosMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-mexico-server" />;
}
