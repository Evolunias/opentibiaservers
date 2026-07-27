import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-donations');
}

export default function ArchlightDonationsKeywordPage() {
  return <StaticKeywordPage slug="archlight-donations" />;
}
