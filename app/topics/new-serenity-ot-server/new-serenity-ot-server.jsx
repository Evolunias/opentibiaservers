import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-ot-server');
}

export default function NewSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-ot-server" />;
}
