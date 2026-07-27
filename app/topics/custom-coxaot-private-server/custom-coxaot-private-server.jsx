import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-private-server');
}

export default function CustomCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-private-server" />;
}
