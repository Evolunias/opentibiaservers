import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-donations');
}

export default function TibiaoriginsDonationsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-donations" />;
}
