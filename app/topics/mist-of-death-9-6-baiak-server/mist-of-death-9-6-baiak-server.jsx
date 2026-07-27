import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-9-6-baiak-server');
}

export default function MistOfDeath96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-9-6-baiak-server" />;
}
