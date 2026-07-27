import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-reset');
}

export default function NostaltherResetKeywordPage() {
  return <StaticKeywordPage slug="nostalther-reset" />;
}
