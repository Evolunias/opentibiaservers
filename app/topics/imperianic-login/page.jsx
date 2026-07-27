import ImperianicLoginKeywordPage, { generateMetadata } from './imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicLoginKeywordPage />;
}
