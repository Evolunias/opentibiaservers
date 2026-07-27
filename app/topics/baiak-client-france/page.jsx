import BaiakClientFranceKeywordPage, { generateMetadata } from './baiak-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientFranceKeywordPage />;
}
