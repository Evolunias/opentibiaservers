import ActiveUnlineClientKeywordPage, { generateMetadata } from './active-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineClientKeywordPage />;
}
