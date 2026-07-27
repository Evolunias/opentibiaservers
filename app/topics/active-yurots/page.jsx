import ActiveYurotsKeywordPage, { generateMetadata } from './active-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsKeywordPage />;
}
