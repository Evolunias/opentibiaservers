import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-ot-server');
}

export default function NewMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-ot-server" />;
}
