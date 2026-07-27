import PaceraServerKeywordPage, { generateMetadata } from './pacera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraServerKeywordPage />;
}
