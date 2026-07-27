import ActiveNostaltherLoginKeywordPage, { generateMetadata } from './active-nostalther-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherLoginKeywordPage />;
}
