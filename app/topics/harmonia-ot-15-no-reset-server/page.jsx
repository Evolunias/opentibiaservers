import HarmoniaOt15NoResetServerKeywordPage, { generateMetadata } from './harmonia-ot-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15NoResetServerKeywordPage />;
}
