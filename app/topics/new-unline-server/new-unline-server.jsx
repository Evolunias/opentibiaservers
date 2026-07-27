import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-server');
}

export default function NewUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="new-unline-server" />;
}
