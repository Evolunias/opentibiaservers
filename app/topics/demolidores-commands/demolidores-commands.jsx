import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-commands');
}

export default function DemolidoresCommandsKeywordPage() {
  return <StaticKeywordPage slug="demolidores-commands" />;
}
