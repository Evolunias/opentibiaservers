import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-germany');
}

export default function MistOfDeathBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-germany" />;
}
