import ActiveAlasteraClientKeywordPage, { generateMetadata } from './active-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraClientKeywordPage />;
}
