import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-ot-server');
}

export default function NewTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-ot-server" />;
}
