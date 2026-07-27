import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-ot-server');
}

export default function NewClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-ot-server" />;
}
