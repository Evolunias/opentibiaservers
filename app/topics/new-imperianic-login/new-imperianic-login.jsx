import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-login');
}

export default function NewImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-login" />;
}
