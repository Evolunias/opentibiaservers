import ActiveAmeriaClientKeywordPage, { generateMetadata } from './active-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaClientKeywordPage />;
}
