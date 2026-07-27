import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp');
}

export default function MistOfDeathHighExpKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp" />;
}
