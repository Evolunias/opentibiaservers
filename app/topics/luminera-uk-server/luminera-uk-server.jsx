import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-uk-server');
}

export default function LumineraUkServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-uk-server" />;
}
