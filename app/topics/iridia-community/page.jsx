import IridiaCommunityKeywordPage, { generateMetadata } from './iridia-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IridiaCommunityKeywordPage />;
}
