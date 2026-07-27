import CalmeraOtUkServersKeywordPage, { generateMetadata } from './calmera-ot-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtUkServersKeywordPage />;
}
