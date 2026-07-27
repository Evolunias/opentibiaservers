import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-client');
}

export default function CustomCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-client" />;
}
