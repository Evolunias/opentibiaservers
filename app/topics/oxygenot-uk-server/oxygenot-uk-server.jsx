import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-uk-server');
}

export default function OxygenotUkServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-uk-server" />;
}
