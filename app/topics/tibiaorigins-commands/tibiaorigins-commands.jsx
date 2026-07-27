import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-commands');
}

export default function TibiaoriginsCommandsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-commands" />;
}
