import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-online');
}

export default function ValoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="valoria-online" />;
}
