import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-ot-server');
}

export default function NewTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-ot-server" />;
}
