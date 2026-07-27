import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-mexico-server');
}

export default function SabrehavenMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-mexico-server" />;
}
