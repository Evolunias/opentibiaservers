import ActiveRealestaClientKeywordPage, { generateMetadata } from './active-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaClientKeywordPage />;
}
