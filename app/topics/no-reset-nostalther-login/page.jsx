import NoResetNostaltherLoginKeywordPage, { generateMetadata } from './no-reset-nostalther-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNostaltherLoginKeywordPage />;
}
