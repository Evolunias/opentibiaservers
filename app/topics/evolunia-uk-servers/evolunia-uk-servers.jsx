import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-uk-servers');
}

export default function EvoluniaUkServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-uk-servers" />;
}
