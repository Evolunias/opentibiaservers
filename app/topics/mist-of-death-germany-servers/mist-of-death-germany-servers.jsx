import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-germany-servers');
}

export default function MistOfDeathGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-germany-servers" />;
}
