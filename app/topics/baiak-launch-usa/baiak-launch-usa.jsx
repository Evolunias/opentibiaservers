import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-usa');
}

export default function BaiakLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-usa" />;
}
