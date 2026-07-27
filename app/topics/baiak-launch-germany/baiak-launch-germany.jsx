import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-germany');
}

export default function BaiakLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-germany" />;
}
