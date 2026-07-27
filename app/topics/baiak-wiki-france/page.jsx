import BaiakWikiFranceKeywordPage, { generateMetadata } from './baiak-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiFranceKeywordPage />;
}
