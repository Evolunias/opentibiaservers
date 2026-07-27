import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-uk-server');
}

export default function TibianusUkServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-uk-server" />;
}
