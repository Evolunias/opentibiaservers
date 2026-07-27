import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-brazil');
}

export default function SabrehavenFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-brazil" />;
}
