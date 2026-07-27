import OtmadnessBrazilServersKeywordPage, { generateMetadata } from './otmadness-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessBrazilServersKeywordPage />;
}
