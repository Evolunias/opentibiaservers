import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-donations');
}

export default function DuraOnlineDonationsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-donations" />;
}
