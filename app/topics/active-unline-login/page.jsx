import ActiveUnlineLoginKeywordPage, { generateMetadata } from './active-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineLoginKeywordPage />;
}
