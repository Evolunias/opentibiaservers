import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-ot');
}

export default function NoResetNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-ot" />;
}
