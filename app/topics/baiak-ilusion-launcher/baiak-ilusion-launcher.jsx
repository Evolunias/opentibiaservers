import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-launcher');
}

export default function BaiakIlusionLauncherKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-launcher" />;
}
