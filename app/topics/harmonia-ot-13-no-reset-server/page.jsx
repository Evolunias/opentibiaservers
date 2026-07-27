import HarmoniaOt13NoResetServerKeywordPage, { generateMetadata } from './harmonia-ot-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13NoResetServerKeywordPage />;
}
