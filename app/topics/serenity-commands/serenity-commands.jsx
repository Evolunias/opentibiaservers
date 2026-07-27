import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-commands');
}

export default function SerenityCommandsKeywordPage() {
  return <StaticKeywordPage slug="serenity-commands" />;
}
