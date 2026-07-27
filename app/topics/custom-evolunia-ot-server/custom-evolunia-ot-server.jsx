import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-ot-server');
}

export default function CustomEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-ot-server" />;
}
