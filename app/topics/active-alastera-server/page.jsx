import ActiveAlasteraServerKeywordPage, { generateMetadata } from './active-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraServerKeywordPage />;
}
