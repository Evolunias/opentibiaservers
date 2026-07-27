import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-commands');
}

export default function NostaltherCommandsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-commands" />;
}
