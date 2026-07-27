import CalmeraServerKeywordPage, { generateMetadata } from './calmera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraServerKeywordPage />;
}
