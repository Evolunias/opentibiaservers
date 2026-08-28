import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import CyntaraWikiPage from '@/app/components/CyntaraWikiPage';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("cyntara");
}

export default function Page() {
  return <CyntaraWikiPage />;
}
