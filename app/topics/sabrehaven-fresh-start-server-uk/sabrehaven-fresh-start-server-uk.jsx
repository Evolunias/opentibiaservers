import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-uk');
}

export default function SabrehavenFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-uk" />;
}
