import CalmeraWarsKeywordPage, { generateMetadata } from './calmera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraWarsKeywordPage />;
}
