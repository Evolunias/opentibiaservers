import CoxaotGermanyServerKeywordPage, { generateMetadata } from './coxaot-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotGermanyServerKeywordPage />;
}
