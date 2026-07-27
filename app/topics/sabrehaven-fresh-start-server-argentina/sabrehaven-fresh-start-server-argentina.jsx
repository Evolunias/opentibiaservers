import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-argentina');
}

export default function SabrehavenFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-argentina" />;
}
