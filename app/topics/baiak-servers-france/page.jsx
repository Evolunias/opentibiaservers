import BaiakServersFranceKeywordPage, { generateMetadata } from './baiak-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersFranceKeywordPage />;
}
