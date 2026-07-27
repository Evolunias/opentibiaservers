import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-uk-server');
}

export default function ThorniaUkServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-uk-server" />;
}
