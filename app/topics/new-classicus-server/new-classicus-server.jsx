import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-server');
}

export default function NewClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-server" />;
}
