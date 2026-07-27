import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-mexico-servers');
}

export default function SabrehavenMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-mexico-servers" />;
}
