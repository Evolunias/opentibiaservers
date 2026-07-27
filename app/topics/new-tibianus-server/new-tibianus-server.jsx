import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-server');
}

export default function NewTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-server" />;
}
