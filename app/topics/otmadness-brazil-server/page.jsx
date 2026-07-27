import OtmadnessBrazilServerKeywordPage, { generateMetadata } from './otmadness-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessBrazilServerKeywordPage />;
}
