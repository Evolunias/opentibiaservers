import CoxaotPvpeKeywordPage, { generateMetadata } from './coxaot-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotPvpeKeywordPage />;
}
