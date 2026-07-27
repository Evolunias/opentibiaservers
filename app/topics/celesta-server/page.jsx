import CelestaServerKeywordPage, { generateMetadata } from './celesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaServerKeywordPage />;
}
