import RealestaClientKeywordPage, { generateMetadata } from './realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaClientKeywordPage />;
}
