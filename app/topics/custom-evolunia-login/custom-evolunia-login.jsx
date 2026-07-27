import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-login');
}

export default function CustomEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-login" />;
}
