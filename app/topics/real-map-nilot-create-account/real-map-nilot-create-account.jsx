import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-create-account');
}

export default function RealMapNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-create-account" />;
}
