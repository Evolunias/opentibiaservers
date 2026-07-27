import NoResetNostaltherServerKeywordPage, { generateMetadata } from './no-reset-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNostaltherServerKeywordPage />;
}
