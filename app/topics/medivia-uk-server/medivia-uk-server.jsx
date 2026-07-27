import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-uk-server');
}

export default function MediviaUkServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-uk-server" />;
}
