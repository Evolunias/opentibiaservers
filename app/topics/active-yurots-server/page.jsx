import ActiveYurotsServerKeywordPage, { generateMetadata } from './active-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsServerKeywordPage />;
}
