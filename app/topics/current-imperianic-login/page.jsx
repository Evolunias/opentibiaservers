import CurrentImperianicLoginKeywordPage, { generateMetadata } from './current-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicLoginKeywordPage />;
}
