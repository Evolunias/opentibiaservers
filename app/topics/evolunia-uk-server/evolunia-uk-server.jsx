import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-uk-server');
}

export default function EvoluniaUkServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-uk-server" />;
}
