import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-login');
}

export default function ActiveClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-login" />;
}
