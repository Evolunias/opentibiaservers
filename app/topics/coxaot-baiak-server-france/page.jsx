import CoxaotBaiakServerFranceKeywordPage, { generateMetadata } from './coxaot-baiak-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotBaiakServerFranceKeywordPage />;
}
