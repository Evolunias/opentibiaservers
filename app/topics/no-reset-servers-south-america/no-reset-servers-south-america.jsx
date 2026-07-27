import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-south-america');
}

export default function NoResetServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-south-america" />;
}
