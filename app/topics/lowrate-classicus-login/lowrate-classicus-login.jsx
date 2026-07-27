import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-login');
}

export default function LowrateClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-login" />;
}
