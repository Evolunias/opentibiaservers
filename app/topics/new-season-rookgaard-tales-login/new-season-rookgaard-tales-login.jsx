import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-login');
}

export default function NewSeasonRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-login" />;
}
