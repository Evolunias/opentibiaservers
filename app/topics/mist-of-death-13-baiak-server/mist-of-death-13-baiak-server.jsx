import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-baiak-server');
}

export default function MistOfDeath13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-baiak-server" />;
}
