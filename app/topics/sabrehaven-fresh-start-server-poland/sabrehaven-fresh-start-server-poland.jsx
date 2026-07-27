import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-poland');
}

export default function SabrehavenFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-poland" />;
}
