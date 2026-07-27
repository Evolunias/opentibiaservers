import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-europe');
}

export default function BaiakLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-europe" />;
}
