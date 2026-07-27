import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-donations');
}

export default function CyntaraDonationsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-donations" />;
}
