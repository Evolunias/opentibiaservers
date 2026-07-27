import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-poland');
}

export default function BaiakLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-poland" />;
}
