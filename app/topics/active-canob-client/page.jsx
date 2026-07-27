import ActiveCanobClientKeywordPage, { generateMetadata } from './active-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobClientKeywordPage />;
}
