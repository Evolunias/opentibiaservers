import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-commands');
}

export default function SabrehavenCommandsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-commands" />;
}
