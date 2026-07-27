import KyraPage, { generateMetadata } from './kyra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraPage />;
}
