import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-commands');
}

export default function BaiakIlusionCommandsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-commands" />;
}
