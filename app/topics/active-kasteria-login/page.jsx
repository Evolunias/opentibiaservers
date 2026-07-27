import ActiveKasteriaLoginKeywordPage, { generateMetadata } from './active-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaLoginKeywordPage />;
}
