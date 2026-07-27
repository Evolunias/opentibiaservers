import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-website');
}

export default function NewRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-website" />;
}
