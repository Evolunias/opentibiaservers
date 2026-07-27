import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-mexico-servers');
}

export default function RuthlessChaosMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-mexico-servers" />;
}
