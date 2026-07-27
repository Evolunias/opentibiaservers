import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-ot-server');
}

export default function FreshStartSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-ot-server" />;
}
