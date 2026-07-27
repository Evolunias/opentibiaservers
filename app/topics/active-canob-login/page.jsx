import ActiveCanobLoginKeywordPage, { generateMetadata } from './active-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobLoginKeywordPage />;
}
