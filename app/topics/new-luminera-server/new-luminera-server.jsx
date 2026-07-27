import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-server');
}

export default function NewLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-server" />;
}
