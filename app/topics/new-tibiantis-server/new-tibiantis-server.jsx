import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-server');
}

export default function NewTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-server" />;
}
