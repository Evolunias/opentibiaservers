import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-uk-servers');
}

export default function MediviaUkServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-uk-servers" />;
}
