import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-argentina');
}

export default function BaiakLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-argentina" />;
}
