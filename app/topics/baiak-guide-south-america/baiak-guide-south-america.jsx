import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-south-america');
}

export default function BaiakGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-south-america" />;
}
