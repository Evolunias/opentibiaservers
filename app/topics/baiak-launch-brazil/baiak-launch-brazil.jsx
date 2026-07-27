import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-brazil');
}

export default function BaiakLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-brazil" />;
}
