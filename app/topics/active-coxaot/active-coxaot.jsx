import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot');
}

export default function ActiveCoxaotKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot" />;
}
