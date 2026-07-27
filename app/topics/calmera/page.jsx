import CalmeraKeywordPage, { generateMetadata } from './calmera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraKeywordPage />;
}
