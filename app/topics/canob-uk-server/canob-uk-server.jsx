import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-uk-server');
}

export default function CanobUkServerKeywordPage() {
  return <StaticKeywordPage slug="canob-uk-server" />;
}
