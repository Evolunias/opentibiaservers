import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp');
}

export default function SerenityHighExpKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp" />;
}
