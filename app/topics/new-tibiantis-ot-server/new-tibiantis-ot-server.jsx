import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-ot-server');
}

export default function NewTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-ot-server" />;
}
