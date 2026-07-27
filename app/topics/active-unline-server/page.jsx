import ActiveUnlineServerKeywordPage, { generateMetadata } from './active-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineServerKeywordPage />;
}
