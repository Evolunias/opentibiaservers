import ActiveYurotsClientKeywordPage, { generateMetadata } from './active-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsClientKeywordPage />;
}
