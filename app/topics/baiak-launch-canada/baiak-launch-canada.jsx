import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-canada');
}

export default function BaiakLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-canada" />;
}
