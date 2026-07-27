import ActiveClassicusLoginKeywordPage, { generateMetadata } from './active-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusLoginKeywordPage />;
}
