import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-private-server');
}

export default function CustomEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-private-server" />;
}
