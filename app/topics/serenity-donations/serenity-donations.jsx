import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-donations');
}

export default function SerenityDonationsKeywordPage() {
  return <StaticKeywordPage slug="serenity-donations" />;
}
