import CoxaotFranceServerKeywordPage, { generateMetadata } from './coxaot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotFranceServerKeywordPage />;
}
