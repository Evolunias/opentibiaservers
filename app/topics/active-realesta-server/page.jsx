import ActiveRealestaServerKeywordPage, { generateMetadata } from './active-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaServerKeywordPage />;
}
