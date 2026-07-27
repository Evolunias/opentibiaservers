import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-ot-server');
}

export default function NewAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-ot-server" />;
}
