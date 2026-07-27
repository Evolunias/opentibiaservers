import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-server');
}

export default function CustomCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-server" />;
}
