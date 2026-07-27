import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-create-account');
}

export default function RealMapSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-create-account" />;
}
