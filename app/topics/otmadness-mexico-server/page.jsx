import OtmadnessMexicoServerKeywordPage, { generateMetadata } from './otmadness-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessMexicoServerKeywordPage />;
}
