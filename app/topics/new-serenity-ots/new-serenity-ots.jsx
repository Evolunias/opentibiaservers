import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-ots');
}

export default function NewSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-ots" />;
}
