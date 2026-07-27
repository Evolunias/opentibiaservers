import CurrentNostaltherLoginKeywordPage, { generateMetadata } from './current-nostalther-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherLoginKeywordPage />;
}
