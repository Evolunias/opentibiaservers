import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-germany');
}

export default function SabrehavenFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-germany" />;
}
