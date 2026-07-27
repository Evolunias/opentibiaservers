import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-uk-servers');
}

export default function CanobUkServersKeywordPage() {
  return <StaticKeywordPage slug="canob-uk-servers" />;
}
