import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-brazil-servers');
}

export default function MistOfDeathBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-brazil-servers" />;
}
