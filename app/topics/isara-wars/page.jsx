import IsaraWarsKeywordPage, { generateMetadata } from './isara-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraWarsKeywordPage />;
}
