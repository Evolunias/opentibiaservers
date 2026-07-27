import CalmeraOtPolandServersKeywordPage, { generateMetadata } from './calmera-ot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtPolandServersKeywordPage />;
}
