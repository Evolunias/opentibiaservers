import CelestaWarsKeywordPage, { generateMetadata } from './celesta-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaWarsKeywordPage />;
}
