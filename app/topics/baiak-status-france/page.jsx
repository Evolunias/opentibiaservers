import BaiakStatusFranceKeywordPage, { generateMetadata } from './baiak-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusFranceKeywordPage />;
}
