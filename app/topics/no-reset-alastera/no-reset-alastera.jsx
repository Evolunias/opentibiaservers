import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera');
}

export default function NoResetAlasteraKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera" />;
}
