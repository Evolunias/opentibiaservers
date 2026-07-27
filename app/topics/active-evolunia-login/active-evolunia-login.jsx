import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-login');
}

export default function ActiveEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-login" />;
}
