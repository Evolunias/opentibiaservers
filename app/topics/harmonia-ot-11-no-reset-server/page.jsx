import HarmoniaOt11NoResetServerKeywordPage, { generateMetadata } from './harmonia-ot-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11NoResetServerKeywordPage />;
}
