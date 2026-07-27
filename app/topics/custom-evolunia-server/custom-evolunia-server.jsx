import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-server');
}

export default function CustomEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-server" />;
}
