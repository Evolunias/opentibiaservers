import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-server');
}

export default function NewSeasonRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-server" />;
}
