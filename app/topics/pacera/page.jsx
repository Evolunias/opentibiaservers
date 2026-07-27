import PaceraKeywordPage, { generateMetadata } from './pacera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraKeywordPage />;
}
