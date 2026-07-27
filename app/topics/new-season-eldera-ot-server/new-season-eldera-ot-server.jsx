import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-ot-server');
}

export default function NewSeasonElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-ot-server" />;
}
