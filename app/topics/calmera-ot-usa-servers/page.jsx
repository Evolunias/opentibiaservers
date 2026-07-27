import CalmeraOtUsaServersKeywordPage, { generateMetadata } from './calmera-ot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtUsaServersKeywordPage />;
}
