import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-europe');
}

export default function SabrehavenFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-europe" />;
}
