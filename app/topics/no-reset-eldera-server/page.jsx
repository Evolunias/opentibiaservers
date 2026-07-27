import NoResetElderaServerKeywordPage, { generateMetadata } from './no-reset-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaServerKeywordPage />;
}
