import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-north-america');
}

export default function BaiakLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-north-america" />;
}
