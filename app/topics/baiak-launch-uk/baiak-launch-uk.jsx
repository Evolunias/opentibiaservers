import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-uk');
}

export default function BaiakLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-uk" />;
}
