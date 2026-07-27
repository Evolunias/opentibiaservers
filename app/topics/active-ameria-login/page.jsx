import ActiveAmeriaLoginKeywordPage, { generateMetadata } from './active-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaLoginKeywordPage />;
}
