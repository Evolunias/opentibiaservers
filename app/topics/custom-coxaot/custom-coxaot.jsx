import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot');
}

export default function CustomCoxaotKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot" />;
}
