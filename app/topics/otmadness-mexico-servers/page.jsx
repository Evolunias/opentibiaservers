import OtmadnessMexicoServersKeywordPage, { generateMetadata } from './otmadness-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessMexicoServersKeywordPage />;
}
