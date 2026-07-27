import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-south-america');
}

export default function NoResetGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-south-america" />;
}
