import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-1-baiak-server');
}

export default function MistOfDeath81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-1-baiak-server" />;
}
