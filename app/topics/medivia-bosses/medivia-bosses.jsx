import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-bosses');
}

export default function MediviaBossesKeywordPage() {
  return <StaticKeywordPage slug="medivia-bosses" />;
}
