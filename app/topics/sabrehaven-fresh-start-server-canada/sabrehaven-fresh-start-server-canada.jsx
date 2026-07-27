import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-canada');
}

export default function SabrehavenFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-canada" />;
}
