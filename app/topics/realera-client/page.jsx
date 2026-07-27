import RealeraClientKeywordPage, { generateMetadata } from './realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraClientKeywordPage />;
}
