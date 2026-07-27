import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-argentina');
}

export default function MistOfDeathBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-argentina" />;
}
