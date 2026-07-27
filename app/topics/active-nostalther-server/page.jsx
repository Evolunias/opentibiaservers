import ActiveNostaltherServerKeywordPage, { generateMetadata } from './active-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherServerKeywordPage />;
}
