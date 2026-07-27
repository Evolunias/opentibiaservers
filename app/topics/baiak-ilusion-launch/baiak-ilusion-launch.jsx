import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-launch');
}

export default function BaiakIlusionLaunchKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-launch" />;
}
