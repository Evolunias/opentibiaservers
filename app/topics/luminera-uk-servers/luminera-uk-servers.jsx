import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-uk-servers');
}

export default function LumineraUkServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-uk-servers" />;
}
