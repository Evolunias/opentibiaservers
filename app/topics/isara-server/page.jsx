import IsaraServerKeywordPage, { generateMetadata } from './isara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraServerKeywordPage />;
}
