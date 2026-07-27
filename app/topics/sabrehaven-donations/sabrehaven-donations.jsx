import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-donations');
}

export default function SabrehavenDonationsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-donations" />;
}
