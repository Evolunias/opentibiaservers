import IsaraPage, { generateMetadata } from './isara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraPage />;
}
