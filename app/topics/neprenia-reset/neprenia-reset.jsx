import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-reset');
}

export default function NepreniaResetKeywordPage() {
  return <StaticKeywordPage slug="neprenia-reset" />;
}
