import NoResetElderaPrivateServerKeywordPage, { generateMetadata } from './no-reset-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaPrivateServerKeywordPage />;
}
