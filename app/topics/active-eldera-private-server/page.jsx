import ActiveElderaPrivateServerKeywordPage, { generateMetadata } from './active-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaPrivateServerKeywordPage />;
}
