import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-baiak-server');
}

export default function MistOfDeath15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-baiak-server" />;
}
