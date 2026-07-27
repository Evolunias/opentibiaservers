import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-uk-servers');
}

export default function ThorniaUkServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-uk-servers" />;
}
