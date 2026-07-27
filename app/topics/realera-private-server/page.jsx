import RealeraPrivateServerKeywordPage, { generateMetadata } from './realera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraPrivateServerKeywordPage />;
}
